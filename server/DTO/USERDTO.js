class USERDTO {
    constructor(user){
        this.email = user.email
        this.username = user.username
        this.id = user._id
        this.avator = user?.avator || ""
    }
}

module.exports = USERDTO