"use client";

import {
  DatePicker as DatePickerPrimitive,
  parseDate,
  type UseDatePickerContext,
  useDatePickerContext,
} from "@ark-ui/react/date-picker";
import { Portal } from "@ark-ui/react/portal";
import {
  createListCollection,
  type ListCollection,
  Select,
} from "@ark-ui/react/select";
import {
  Calendar,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

export const DatePicker = ({
  children,
  positioning,
  ...props
}: DatePickerPrimitive.RootProps) => {
  return (
    <DatePickerPrimitive.Root
      positioning={
        positioning ?? {
          placement: "bottom-end",
        }
      }
      {...props}
    >
      {children}
    </DatePickerPrimitive.Root>
  );
};

export const DatePickerLabel = ({
  className,
  ...props
}: DatePickerPrimitive.LabelProps) => (
  <DatePickerPrimitive.Label
    data-slot="date-picker-label"
    className={cn(
      "text-sm font-medium text-foreground select-none data-disabled:opacity-50",
      className,
    )}
    {...props}
  />
);

export const DatePickerInput = ({
  startAddon,
  endAddon,
  showClear = true,
  size = "default",
  className,
  placeholder,
  variant = "input",
  containerClassName,
  separator = " - ",
}: {
  startAddon?: ReactNode;
  endAddon?: ReactNode;
  showClear?: boolean;
  showIndicator?: boolean;
  size?: "default" | "sm" | "lg";
  className?: string;
  placeholder?: string;
  variant?: "button" | "input";
  containerClassName?: string;
  separator?: string;
}) => {
  if (variant === "button") {
    return (
      <DatePickerPrimitive.Control className={cn("w-full", containerClassName)}>
        <DatePickerPrimitive.Trigger asChild>
          <Button variant="outline" className={cn("w-full", className)}>
            {startAddon}
            <DatePickerPrimitive.ValueText
              placeholder={placeholder}
              separator={separator}
              className="text-start flex-1"
            />
            {endAddon}
            <Calendar className="size-4" />
          </Button>
        </DatePickerPrimitive.Trigger>
      </DatePickerPrimitive.Control>
    );
  }

  return (
    <DatePickerPrimitive.Control asChild>
      <InputGroup className={cn("w-full", containerClassName)}>
        {startAddon && (
          <InputGroupAddon align={"inline-start"}>{startAddon}</InputGroupAddon>
        )}
        <DatePickerPrimitive.Input asChild placeholder={placeholder}>
          <InputGroupInput size={size} className={cn("w-full", className)} />
        </DatePickerPrimitive.Input>
        <InputGroupAddon align={"inline-end"}>
          {endAddon}
          {showClear && (
            <DatePickerPrimitive.ClearTrigger asChild>
              <Button variant="ghost" size={"icon-sm"}>
                <XIcon />
              </Button>
            </DatePickerPrimitive.ClearTrigger>
          )}
          <DatePickerPrimitive.Trigger asChild>
            <Button variant="ghost" size={"icon-sm"}>
              <Calendar />
            </Button>
          </DatePickerPrimitive.Trigger>
        </InputGroupAddon>
      </InputGroup>
    </DatePickerPrimitive.Control>
  );
};

export const DatePickerControl = ({
  ...props
}: DatePickerPrimitive.ControlProps) => (
  <DatePickerPrimitive.Control data-slot="date-picker-control" {...props} />
);

export const DatePickerInputInput = ({
  ...props
}: DatePickerPrimitive.InputProps) => (
  <DatePickerPrimitive.Input data-slot="date-picker-input" {...props} />
);

export const DatePickerTrigger = ({
  ...props
}: DatePickerPrimitive.TriggerProps) => (
  <DatePickerPrimitive.Trigger data-slot="date-picker-trigger" {...props} />
);

export const DatePickerClearTrigger = ({
  ...props
}: DatePickerPrimitive.ClearTriggerProps) => (
  <DatePickerPrimitive.ClearTrigger
    data-slot="date-picker-clear-trigger"
    {...props}
  />
);

export const DatePickerViewControl = ({
  className,
  ...props
}: DatePickerPrimitive.ViewControlProps) => (
  <DatePickerPrimitive.ViewControl
    data-slot="date-picker-view-control"
    className={cn("flex items-center justify-between gap-2", className)}
    {...props}
  />
);

const MonthYearSelect = ({
  collection,
  selectedValue,
  onChange,
}: {
  collection: ListCollection<{ label: string; value: string }>;
  selectedValue: number;
  onChange: (value: number) => void;
}) => {
  return (
    <Select.Root
      collection={collection}
      value={[selectedValue.toString()]}
      onValueChange={({ value }) => {
        const selectedValue = value?.[0];
        if (selectedValue) {
          onChange(+selectedValue);
        }
      }}
      positioning={{
        sameWidth: true,
      }}
    >
      <Select.Control>
        <Select.Trigger className="min-w-20 h-(--cell-size) flex items-center gap-2 text-sm border py-0.5 px-2 rounded-md cursor-pointer data-disabled:cursor-default disabled:cursor-default hover:bg-accent hover:text-accent-foreground">
          <Select.ValueText
            placeholder="Select"
            className="text-start flex-1"
          />
          <Select.Indicator>
            <ChevronDownIcon className="rtl:rotate-180 size-4" />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content
            className={cn(
              "z-60 overflow-hidden rounded-md border bg-popover p-2 text-popover-foreground shadow-md",
              "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95",
              "data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
              "max-h-56 overflow-y-auto space-y-1",
            )}
          >
            {collection.items.map((item) => (
              <Select.Item
                key={item.value}
                item={item}
                className="flex items-center gap-2 text-sm data-highlighted:bg-accent data-[state='checked']:bg-accent data-highlighted:text-accent-foreground data-[state='checked']:text-accent-foreground cursor-pointer p-1 rounded-md"
              >
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon className="size-4" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
};

export const DatePickerViewTrigger = ({
  className,
  children,
  viewTriggerTextOnly = false,
  monthYearSelect = false,
  ...props
}: DatePickerPrimitive.ViewTriggerProps & {
  viewTriggerTextOnly?: boolean;
  monthYearSelect?: boolean;
}) => {
  const { getMonths, getYears, view, focusMonth, focusYear, focusedValue } =
    useDatePickerContext();

  const months = getMonths({ format: "short" });
  const years = getYears();

  const selectedMonth = focusedValue?.month;
  const selectedYear = focusedValue?.year;

  const monthsCollection = createListCollection({
    items:
      months?.map((month) => ({
        label: month.label,
        value: month.value?.toString(),
      })) ?? [],
  });

  const yearsCollection = createListCollection({
    items:
      years?.map((year) => ({
        label: year.label,
        value: year.value?.toString(),
      })) ?? [],
  });

  if (monthYearSelect && view === "day") {
    return (
      <div className="flex items-center gap-2">
        <MonthYearSelect
          collection={monthsCollection}
          selectedValue={selectedMonth}
          onChange={(value) => {
            focusMonth(value);
          }}
        />
        <MonthYearSelect
          collection={yearsCollection}
          selectedValue={selectedYear}
          onChange={(value) => {
            focusYear(value);
          }}
        />
      </div>
    );
  }

  if (viewTriggerTextOnly) {
    return <DatePickerRangeText />;
  }

  return (
    <DatePickerPrimitive.ViewTrigger
      data-slot="date-picker-view-trigger"
      className={cn(
        buttonVariants({
          variant: "ghost",
          className: `data-[view="year"]:hover:bg-transparent data-[view="year"]:cursor-default`,
        }),
        "min-w-36 min-h-(--cell-size) tabular-nums",
        className,
      )}
      {...props}
    >
      {children ?? <DatePickerPrimitive.RangeText />}
    </DatePickerPrimitive.ViewTrigger>
  );
};

export const DatePickerPrevTrigger = ({
  className,
  children,
  ...props
}: DatePickerPrimitive.PrevTriggerProps) => (
  <DatePickerPrimitive.PrevTrigger
    data-slot="date-picker-prev-trigger"
    className={cn(
      buttonVariants({ variant: "outline", size: "icon" }),
      "size-(--cell-size)!",
      className,
    )}
    aria-label="Previous"
    {...props}
  >
    {children ?? <ChevronLeftIcon className="rtl:rotate-180" />}
  </DatePickerPrimitive.PrevTrigger>
);

export const DatePickerNextTrigger = ({
  className,
  children,
  ...props
}: DatePickerPrimitive.NextTriggerProps) => (
  <DatePickerPrimitive.NextTrigger
    data-slot="date-picker-next-trigger"
    className={cn(
      buttonVariants({ variant: "outline", size: "icon" }),
      "size-(--cell-size)!",
      className,
    )}
    aria-label="Next"
    {...props}
  >
    {children ?? <ChevronRightIcon className="rtl:rotate-180" />}
  </DatePickerPrimitive.NextTrigger>
);

export const DatePickerContext = DatePickerPrimitive.Context;

export const DatePickerRangeText = ({
  className,
  ...props
}: DatePickerPrimitive.RangeTextProps) => (
  <DatePickerPrimitive.RangeText
    data-slot="date-picker-range-text"
    className={cn("text-sm font-medium", className)}
    {...props}
  />
);

export const DatePickerPresetTrigger = ({
  ...props
}: DatePickerPrimitive.PresetTriggerProps) => (
  <DatePickerPrimitive.PresetTrigger
    data-slot="date-picker-preset-trigger"
    {...props}
  />
);
export const DatePickerValueText = ({
  className,
  ...props
}: DatePickerPrimitive.ValueTextProps) => (
  <DatePickerPrimitive.ValueText
    data-slot="date-picker-value-text"
    className={cn("text-sm text-foreground", className)}
    {...props}
  />
);

export const DatePickerTable = ({
  className,
  ...props
}: DatePickerPrimitive.TableProps) => (
  <DatePickerPrimitive.Table
    data-slot="date-picker-table"
    className={cn(
      "group/table w-full border-separate border-spacing-x-1 border-spacing-y-1 data-[selection-mode='range']:border-spacing-x-0 not-data-[selection-mode='range']:data-[view='month']:border-spacing-x-1 not-data-[selection-mode='range']:data-[view='year']:border-spacing-x-1",
      className,
    )}
    {...props}
  />
);

export const DatePickerTableHead = ({
  ...props
}: DatePickerPrimitive.TableHeadProps) => (
  <DatePickerPrimitive.TableHead
    data-slot="date-picker-table-head"
    {...props}
  />
);

export const DatePickerTableHeader = ({
  className,
  ...props
}: DatePickerPrimitive.TableHeaderProps) => (
  <DatePickerPrimitive.TableHeader
    data-slot="date-picker-table-header"
    className={cn(
      "size-(--cell-size) rounded-md text-[0.8rem] font-normal text-muted-foreground",
      className,
    )}
    {...props}
  />
);

export const DatePickerTableBody = ({
  ...props
}: DatePickerPrimitive.TableBodyProps) => (
  <DatePickerPrimitive.TableBody
    data-slot="date-picker-table-body"
    {...props}
  />
);

export const DatePickerTableRow = ({
  className,
  ...props
}: DatePickerPrimitive.TableRowProps) => (
  <DatePickerPrimitive.TableRow
    data-slot="date-picker-table-row"
    className={cn("group", className)}
    {...props}
  />
);

export const DatePickerTableCell = ({
  className,
  ...props
}: DatePickerPrimitive.TableCellProps) => (
  <DatePickerPrimitive.TableCell
    data-slot="date-picker-table-cell"
    className={cn("p-0 text-center group/cell size-(--cell-size)", className)}
    {...props}
  />
);

export const DatePickerTableCellTrigger = ({
  className,
  ...props
}: DatePickerPrimitive.TableCellTriggerProps) => (
  <DatePickerPrimitive.TableCellTrigger
    data-slot="date-picker-table-cell-trigger"
    className={cn(
      "flex w-full h-full items-center group-data-[selection-mode='single']/table:rounded-md group-data-[selection-mode='multiple']/table:rounded-md justify-center text-sm font-normal cursor-pointer data-disabled:cursor-not-allowed",
      // Today
      "data-today:relative data-today:after:pointer-events-none data-today:after:absolute data-today:after:bottom-1 data-today:after:inset-s-1/2 data-today:after:z-1 data-today:after:size-0.75 data-today:after:-translate-x-1/2 data-today:after:rounded-full data-today:after:bg-primary data-selected:after:bg-background! data-disabled:after:bg-foreground/30! data-today:after:transition-colors",
      // Selected
      "data-selected:bg-primary data-selected:text-primary-foreground",
      // Hover / focus
      "hover:bg-accent hover:text-accent-foreground focus-visible:outline-none data-focus:bg-accent data-focus:text-accent-foreground",
      // Disabled
      "data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:pointer-events-none data-disabled:select-none",
      // Outside range
      "data-outside-range:text-muted-foreground  data-outside-range:data-selected:bg-accent/50 data-outside-range:data-selected:text-muted-foreground",
      // Range
      "data-in-range:bg-accent group-first/cell:data-in-range:rounded-l-md group-last/cell:data-in-range:rounded-r-md data-range-start:rounded-l-md data-range-end:rounded-r-md data-hover-range-start:rounded-l-md data-hover-range-end:rounded-r-md not-data-in-range:data-focus:rounded-md hover:not-data-in-range:rounded-md",
      className,
    )}
    {...props}
  />
);

type WeekDayFormat = keyof Omit<
  UseDatePickerContext["weekDays"][number],
  "value"
>;
type MonthFormat = NonNullable<
  NonNullable<Parameters<UseDatePickerContext["getMonths"]>["0"]>["format"]
>;

type CalendarViewProps = {
  headerLess?: boolean;
  viewTriggerTextOnly?: boolean;
  numberOfMonths?: number;
  monthYearSelect?: boolean;
} & (
  | { view: "day"; weekFormat?: WeekDayFormat }
  | { view: "month"; monthFormat?: MonthFormat; columns?: number }
  | { view: "year"; columns?: number }
);

export const DatePickerCalendarView = (props: CalendarViewProps) => {
  const {
    view,
    headerLess,
    viewTriggerTextOnly,
    numberOfMonths,
    monthYearSelect,
  } = props;

  const weekFormat: WeekDayFormat =
    view === "day" ? (props.weekFormat ?? "short") : "short";
  const monthFormat: MonthFormat =
    view === "month" ? (props.monthFormat ?? "short") : "short";
  const monthColumns = view === "month" ? (props.columns ?? 4) : 4;
  const yearColumns = view === "year" ? (props.columns ?? 4) : 4;

  const Table = ({ index }: { index?: number }) => {
    return (
      <DatePickerContext>
        {(ctx) => {
          const weekDays = ctx.weekDays;
          const data = index ? ctx.getOffset({ months: index }) : ctx;
          const monthRows = ctx.getMonthsGrid({
            columns: monthColumns,
            format: monthFormat,
          });
          const yearRows = ctx.getYearsGrid({ columns: yearColumns });
          const selectionMode = ctx.selectionMode;

          return (
            <DatePickerTable
              data-selection-mode={selectionMode}
              data-view={view}
            >
              {view === "day" && (
                <DatePickerTableHead>
                  <DatePickerTableRow>
                    {weekDays.map((wd) => (
                      <DatePickerTableHeader key={wd.value.toString()}>
                        {wd[weekFormat]}
                      </DatePickerTableHeader>
                    ))}
                  </DatePickerTableRow>
                </DatePickerTableHead>
              )}
              <DatePickerTableBody>
                {view === "day" &&
                  data.weeks.map((week) => (
                    <DatePickerTableRow
                      key={week.map((d) => d.toString()).join(",")}
                    >
                      {week.map((day) => (
                        <DatePickerTableCell
                          key={day.toString()}
                          value={day}
                          visibleRange={data.visibleRange}
                        >
                          <DatePickerTableCellTrigger>
                            {day.day}
                          </DatePickerTableCellTrigger>
                        </DatePickerTableCell>
                      ))}
                    </DatePickerTableRow>
                  ))}
                {view === "month" &&
                  monthRows.map((row) => (
                    <DatePickerTableRow
                      key={row.map((m) => m.value.toString()).join(",")}
                    >
                      {row.map((month) => (
                        <DatePickerTableCell
                          key={month.value.toString()}
                          value={month.value}
                        >
                          <DatePickerTableCellTrigger>
                            {month.label}
                          </DatePickerTableCellTrigger>
                        </DatePickerTableCell>
                      ))}
                    </DatePickerTableRow>
                  ))}
                {view === "year" &&
                  yearRows.map((row) => (
                    <DatePickerTableRow
                      key={row.map((y) => y.value.toString()).join(",")}
                    >
                      {row.map((year) => (
                        <DatePickerTableCell
                          key={year.value.toString()}
                          value={year.value}
                        >
                          <DatePickerTableCellTrigger>
                            {year.label}
                          </DatePickerTableCellTrigger>
                        </DatePickerTableCell>
                      ))}
                    </DatePickerTableRow>
                  ))}
              </DatePickerTableBody>
            </DatePickerTable>
          );
        }}
      </DatePickerContext>
    );
  };

  if (headerLess) {
    return <Table />;
  }

  return (
    <DatePickerPrimitive.View view={view}>
      <DatePickerViewControl>
        <DatePickerPrevTrigger />
        <DatePickerViewTrigger
          viewTriggerTextOnly={viewTriggerTextOnly}
          monthYearSelect={monthYearSelect}
        />
        <DatePickerNextTrigger />
      </DatePickerViewControl>
      {numberOfMonths && numberOfMonths > 1 ? (
        <div className="flex flex-col lg:flex-row gap-2">
          {Array.from({ length: numberOfMonths }).map((_, index) => (
            <Table key={index} index={index} />
          ))}
        </div>
      ) : (
        <Table />
      )}
    </DatePickerPrimitive.View>
  );
};

type DatePickerCalendarProps = {
  weekFormat?: WeekDayFormat;
  monthFormat?: MonthFormat;
  monthColumns?: number;
  yearColumns?: number;
  viewTriggerTextOnly?: boolean;
  enablePresets?: boolean;
  monthYearSelect?: boolean;
};
const rangePresets: {
  label: string;
  value: DatePickerPrimitive.PresetTriggerProps["value"];
}[] = [
  { label: "Today", value: [parseDate(new Date()), parseDate(new Date())] },
  { label: "Last 3 days", value: "last3Days" },
  { label: "Last 7 days", value: "last7Days" },
  { label: "Last 14 days", value: "last14Days" },
  { label: "Last 30 days", value: "last30Days" },
  { label: "Last 90 days", value: "last90Days" },
];

const singlePresets: {
  label: string;
  value: DatePickerPrimitive.PresetTriggerProps["value"];
}[] = [
  { label: "Today", value: [parseDate(new Date())] },
  {
    label: "Yesterday",
    value: [parseDate(new Date(new Date().setDate(new Date().getDate() - 1)))],
  },
  {
    label: "Last week",
    value: [parseDate(new Date(new Date().setDate(new Date().getDate() - 7)))],
  },
  {
    label: "Last month",
    value: [
      parseDate(new Date(new Date().setMonth(new Date().getMonth() - 1))),
    ],
  },
  {
    label: "Last year",
    value: [
      parseDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1))),
    ],
  },
];

export const DatePickerCalendar = ({
  monthColumns,
  yearColumns,
  monthFormat,
  weekFormat,
  viewTriggerTextOnly,
  enablePresets = false,
  monthYearSelect = false,
}: DatePickerCalendarProps) => {
  const { inline, numOfMonths, selectionMode } = useDatePickerContext();

  const contentClassName = cn(
    "[--cell-size:--spacing(8)] z-50 overflow-hidden rounded-md border bg-popover p-3 text-popover-foreground shadow-md",
    "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95",
    "data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
    "grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-2",
  );

  const presets = selectionMode === "range" ? rangePresets : singlePresets;

  const Presets = () => {
    if (!enablePresets) return null;
    return (
      <div
        className={
          "flex flex-col px-2 pt-2 border-t lg:border-t-0 lg:pt-0 lg:border-l"
        }
      >
        {presets.map((preset) => (
          <DatePickerPresetTrigger
            key={preset.label}
            value={preset.value}
            asChild
          >
            <Button variant="ghost" size="sm">
              {preset.label}
            </Button>
          </DatePickerPresetTrigger>
        ))}
      </div>
    );
  };

  if (!inline) {
    return (
      <Portal>
        <DatePickerPrimitive.Positioner>
          <DatePickerPrimitive.Content
            data-slot="date-picker-content"
            className={contentClassName}
          >
            <DatePickerCalendarView
              view="day"
              weekFormat={weekFormat}
              viewTriggerTextOnly={viewTriggerTextOnly}
              numberOfMonths={numOfMonths}
              monthYearSelect={monthYearSelect}
            />
            <DatePickerCalendarView
              view="month"
              columns={monthColumns}
              monthFormat={monthFormat}
            />
            <DatePickerCalendarView view="year" columns={yearColumns} />
            <Presets />
          </DatePickerPrimitive.Content>
        </DatePickerPrimitive.Positioner>
      </Portal>
    );
  }

  return (
    <DatePickerPrimitive.Content
      data-slot="date-picker-content"
      className={contentClassName}
    >
      <DatePickerCalendarView
        view="day"
        weekFormat={weekFormat}
        viewTriggerTextOnly={viewTriggerTextOnly}
        numberOfMonths={numOfMonths}
      />
      <DatePickerCalendarView
        view="month"
        columns={monthColumns}
        monthFormat={monthFormat}
      />
      <DatePickerCalendarView view="year" columns={yearColumns} />
      <Presets />
    </DatePickerPrimitive.Content>
  );
};
