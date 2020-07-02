describe("Login Application", function(){
    
    it("open browser", function(){
        browser.url('/login')
    });
    it("Input username", function(){
        const FieldUsername = $('#username')
        FieldUsername.setValue('tomsmith')
        browser.pause(1000)
    });
    it("Input password", function(){
        const FiledPassword = $('#password')
        FiledPassword.setValue('SuperSecretPassword')
    });
    it("click button", function(){
        const ButtonLoggin = $('button')
        ButtonLoggin.click()
    })
})