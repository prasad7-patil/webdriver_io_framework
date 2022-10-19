class loginPage{
    get userNameTextField(){
        return $("[name='user_name']")
    }
    get passwordTextField(){
        return $("[name='user_password']")
    }
    get submitButton(){
        return $("[id='submitButton']")
    }

    async login (username, password) {
        await this.userNameTextField.setValue(username);
        await this.passwordTextField.setValue(password);
        await this.submitButton.click();
    }
}

module.exports = new loginPage();