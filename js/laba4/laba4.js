const createNewUser = () => {
    const firstName = prompt("Введіть ваше ім'я:");
    const lastName = prompt("Введіть ваше прізвище:");

    return {
        firstName,
        lastName,
        getLogin() {
            return `${this.firstName.toLowerCase().charAt(0)}${this.lastName.toLowerCase()}`;
        }
    };
};

const user = createNewUser();
console.log(user.getLogin());
