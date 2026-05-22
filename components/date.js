import { parseISO, format } from 'date-fns';
 
export default function Date({ dateString }) {
  if (!dateString) {
    return null; // 或者返回 <span>No date</span>
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}