import { NotificationType } from '@/api/types/notification';
import { useReservationStore } from '@/store/reservationModal.store';
import CalculateTime from '@/utils/calculateTime';
import Link from 'next/link';
import { useCallback, useMemo } from 'react';

export const NotificationLayout = ({ notice }: { notice: NotificationType }) => {
  const { setOpen, setReservationId, setIsMeeting } = useReservationStore();

  const handleClick = useCallback(() => {
    setOpen(true);
    setIsMeeting(true);
    setReservationId(notice?.targetId as any);
  }, [notice?.targetId, setOpen, setIsMeeting, setReservationId]);

  const calculatedTime = useMemo(() => CalculateTime(notice?.date), [notice?.date]);
  return (
    <Link href={`/reservation/myreservationlist`} onClick={handleClick}>
      <div
        key={notice?.notificationId}
        className="flex flex-row  justify-start items-center mt-[16px] mb-[36px] relative">
        <img src={notice?.image} className="mr-[14px] w-[28px] h-[28px]" alt="" />

        <div className="flex flex-col justify-start items-start">
          <div className="  text-sm font-bold text-black mb-[6px]">{notice?.title}</div>
          <div className="text-sm font-medium text-neutral-600  flex-grow">
            {notice?.content}
          </div>
        </div>
        <div
          className="min-w-[60px] w-auto  pl-[20px] pb-[35px] text-xs  font-light text-neutral-400 absolute
         top-0 right-2
      ">
          {calculatedTime}
        </div>
      </div>
    </Link>
  );
};
