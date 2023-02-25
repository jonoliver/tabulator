import styles from './controls.module.scss';
import Icon from '../icon';
import { Show } from "../show";

interface EditButtonProps {
  isEdit: boolean;
  setIsEdit(isEdit: boolean): void;
}
const EditButton = ({ isEdit, setIsEdit }: EditButtonProps) => {
  return <button onClick={() => setIsEdit(!isEdit)}>{isEdit
    ? <Icon id='icon--checkbox' /> // 'Done'
    : <Icon id='icon--edit' /> // 'Edit'
  }</button>;
};
interface EditPaneProps extends EditButtonProps {
  pasteValue: number;
  onNoteValueChange(value: number): void;
}
export const EditPane = ({
  isEdit,
  setIsEdit,
  pasteValue,
  onNoteValueChange,
}: EditPaneProps) => {
  return (
    <section className={styles.editControls}>
      <Show when={isEdit}>
        <>
          <div className={styles.editHistory}>
            <button onClick={() => window.history.back()}>
              <Icon id="icon--undo" />
              {/* Undo */}
            </button>
            <button onClick={() => window.history.forward()}>
              <Icon id="icon--redo" />
              {/* Redo */}
            </button>
          </div>

          <div className={styles.editFret}>
            <div>
              <button
                data-cy="control-decrement"
                onClick={() =>
                  pasteValue > 0 && onNoteValueChange(pasteValue - 1)
                }
              >
                <Icon id="icon--minus" />
              </button>
            </div>
            <div className={styles.fretInput}>
              <label htmlFor="control-fret-number">FRET</label>
              <input
                id="control-fret-number"
                inputMode="numeric"
                min="0"
                max="25"
                value={pasteValue}
                onChange={e => onNoteValueChange(parseInt(e.target.value, 10))}
              />
            </div>
            <div>
              <button
                data-cy="control-increment"
                onClick={() => onNoteValueChange(pasteValue + 1)}
              >
                <Icon id="icon--plus" />
              </button>
            </div>
          </div>
        </>
      </Show>
      <div className={styles.editGeneral}>
        <button
          onClick={() => {
            if (!navigator.clipboard) return;
            navigator.clipboard.writeText(window.location.href);
            alert('Copied shareable link.');
          }}
        >
          <Icon id="icon--copy" />
          {/* Copy */}
        </button>
        <EditButton {...{ isEdit, setIsEdit }} />
      </div>
    </section>
  );
};
