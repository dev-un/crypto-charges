"use client";

import React from "react";
import DateRangePicker from "@/components/DateRangePicker";
import { DateRange } from "@/components/DateRangePicker/types";
import { format } from "date-fns";

const TestPage = () => {
  const [dateRange, setDateRange] = React.useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  return (
    <div className={`flex gap-[200px]`}>
      <DateRangePicker value={dateRange} onChange={setDateRange} />
      <ul className={"mt-1"}>
        {dateRange.startDate && (
          <li>From: {format(dateRange.startDate, "dd.MM.yyyy")}</li>
        )}
        {dateRange.endDate && (
          <li>To: {format(dateRange.endDate, "dd.MM.yyyy")}</li>
        )}
      </ul>
    </div>
  );
};

export default TestPage;
