import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import {
  addDays,
  addMonths,
  eachWeekOfInterval,
  endOfDay,
  endOfMonth,
  format,
  isSameDay,
  isWithinInterval,
  startOfDay,
  startOfMonth,
} from "date-fns";
import { DateRangePickerProps } from "@/components/DateRangePicker/types";
import clsx from "clsx";
import withAdmin from "@/HOCs/withAdmin";

const DateRangePicker = ({ value, onChange }: DateRangePickerProps) => {
  const [visibleDate, setVisibleDate] = React.useState(new Date());

  const monthWeeks = eachWeekOfInterval({
    start: startOfMonth(visibleDate),
    end: endOfMonth(visibleDate),
  });

  const incrementMonth = (count: number) => {
    setVisibleDate((p) => addMonths(p, count));
  };

  const onDayClick = (date: Date) => {
    if (
      !value.startDate ||
      (value.startDate && value.endDate) ||
      date < value.startDate
    ) {
      onChange({ startDate: startOfDay(date), endDate: null });
      return;
    }
    if (value.startDate && !value.endDate) {
      onChange({ startDate: value.startDate, endDate: endOfDay(date) });
      return;
    }
  };

  return (
    <div className={styles.DateRangePicker}>
      <div className={styles["DateRangePicker__controls"]}>
        <button onClick={() => incrementMonth(-1)}>{"<"}</button>
        <span>{format(visibleDate, "MMM yyyy")}</span>
        <button onClick={() => incrementMonth(1)}>{">"}</button>
      </div>

      <div className={styles["DateRangePicker__weekDayNames"]}>
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>

      <div className={styles["DateRangePicker__month"]}>
        {monthWeeks.map((weekStartDate) => (
          <div
            key={weekStartDate.getTime()}
            className={styles["DateRangePicker__month__week"]}
          >
            {Array(7)
              .fill(null)
              .map((_, i) => {
                const date = addDays(weekStartDate, i);
                const day = date.getDate();
                const month = date.getMonth();
                return (
                  <div
                    key={`${month}.${day}`}
                    className={clsx(
                      styles["DateRangePicker__month__week__day"],
                      {
                        [styles["DateRangePicker__month__week__day--hidden"]]:
                          month !== visibleDate.getMonth(),
                        [styles["DateRangePicker__month__week__day--selected"]]:
                          isWithinInterval(date, {
                            start: value.startDate || 0,
                            end: value.endDate || value.startDate || 0,
                          }),
                        [styles[
                          "DateRangePicker__month__week__day--left-round"
                        ]]: isSameDay(value.startDate || 0, date),
                        [styles[
                          "DateRangePicker__month__week__day--right-round"
                        ]]: isSameDay(value.endDate || 0, date),
                      },
                    )}
                    onClick={() => onDayClick(date)}
                  >
                    {day}
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withAdmin(DateRangePicker);
