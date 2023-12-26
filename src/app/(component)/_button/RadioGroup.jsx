import RoundCheckbox from "../_checkbox/RoundCheckbox";
import styles from "./RadioGroup.module.css";

export default function RadioGroup({ options, values, setValues, ...others }) {
  const onLabelClick = () => {};
  return (
    <>
      <div className={styles.radioGroupWrap}>
        {options?.map((e) => (
          <div className={styles.checkboxWrap} key={e.value}>
            <RoundCheckbox
              style={{ marginRight: 10 }}
              value={values === e.value || values?.includes(e) || false}
              setValue={(checked) => {
                if (checked) setValues(e?.value);
              }}
              label={e?.label}
            />
          </div>
        ))}
      </div>
    </>
  );
}
