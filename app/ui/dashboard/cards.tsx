import { BsCoin, BsCashCoin, BsHourglass, BsCollection } from "react-icons/bs";
import { fetchCardData } from "@/app/lib/data";

const iconMap = {
  first: BsCoin,
  second: BsCashCoin,
  third: BsHourglass,
  fourth: BsCollection,
};

export default async function CardWrapper() {
  const { monthlyIncome, yearIncome, pendingWorksheets, closedWorksheets } =
    await fetchCardData();

  return (
    <>
      <Card title="Havi bevétel" value={monthlyIncome} type="first" />
      <Card title="Éves bevétel" value={yearIncome} type="second" />
      <Card title="Függő munkalapok" value={pendingWorksheets} type="third" />
      <Card title="Lezárt munkalapok" value={closedWorksheets} type="fourth" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "first" | "second" | "third" | "fourth";
}) {
  const Icon = iconMap[type];

  return (
    <div className="col-xl-3 col-md-3 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {value}
              </div>
            </div>
            <div className="col-auto">
              <Icon size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
