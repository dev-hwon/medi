export default function adjColon(number) {
  const hours = number.substring(0, 2);
  const minute = number.substring(2, 4);
  return hours + ":" + minute;
}
