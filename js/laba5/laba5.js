const createNewUser = () => {
    const firstName = prompt("Введіть ваше ім'я:");
    const lastName = prompt("Введіть ваше прізвище:");
    const birthdayString = prompt("Введіть вашу дату народження у форматі dd.mm.yyyy:");
    const [day, month, year] = birthdayString.split('.').map(part => parseInt(part));

    return {
        firstName,
        lastName,
        birthday: {day, month, year},
        getAge() {
            const today = new Date();
            let age = today.getFullYear() - this.birthday.year;
            if (today.getMonth() < this.birthday.month - 1 ||
                (today.getMonth() === this.birthday.month - 1 && today.getDate() < this.birthday.day)) {
                age--;
            }
            return age;
        },
        getPassword() {
            return `${this.firstName.charAt(0).toUpperCase()}${this.lastName.toLowerCase()}${this.birthday.year}`;
        }
    };
};

const user = createNewUser();
console.log(user);

console.log(`Вік користувача: ${user.getAge()}`);
console.log(`Пароль користувача: ${user.getPassword()}`);
