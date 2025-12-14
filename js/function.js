//Функция для проверки длины строки

const checkStringLength = (string, symbols) => {
  return string.length <= symbols;
};

console.log(checkStringLength("Природа", 5));

//Функция для проверки, является ли строка палиндромом
const checkStringIsPalindrom = (string) => {
  let newString = string.toLowerCase().split("").reverse().join("");
  return string.toLowerCase() === newString;
};

console.log(checkStringIsPalindrom("Кекс"));
console.log(checkStringIsPalindrom("Довод"));

const getNumberFromString = (string) => {
  let newString = string.replace(/\D/g, "");
  return parseInt(newString, 10);
};

console.log(getNumberFromString("1 кефир, 0.5 батоналет"));

function validateMeetingWithinWorkHours(
  workStart,
  workEnd,
  meetingStart,
  meetingDurationMinutes
) {
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const workStartMinutes = timeToMinutes(workStart);
  const workEndMinutes = timeToMinutes(workEnd);
  const meetingStartMinutes = timeToMinutes(meetingStart);

  const meetingEndMinutes = meetingStartMinutes + meetingDurationMinutes;

  return (
    meetingStartMinutes >= workStartMinutes &&
    meetingEndMinutes <= workEndMinutes
  );
}

console.log(validateMeetingWithinWorkHours("08:00", "17:30", "14:00", 90));
console.log(validateMeetingWithinWorkHours("8:0", "10:0", "8:0", 120));
console.log(validateMeetingWithinWorkHours("08:00", "14:30", "14:00", 90));
console.log(validateMeetingWithinWorkHours("14:00", "17:30", "08:0", 90));
console.log(validateMeetingWithinWorkHours("8:00", "17:30", "08:00", 900));
