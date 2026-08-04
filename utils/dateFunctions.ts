export const calculateAge = (birthDate: string) => {
  const convertedBirthDate = new Date(birthDate);
  const today = new Date();

  let age = today.getFullYear() - convertedBirthDate.getFullYear();
  const monthDifference = today.getMonth() - convertedBirthDate.getMonth();
  const dayDifference = () => today.getDate() - convertedBirthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference() < 0))
    return --age;

  return age;
};
