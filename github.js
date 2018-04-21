class Github {
    constructor() {
        this.client_id = '5bcb8212e29d59f8d44c';
        this.client_secret = 'bcdb671472417a9e42243caaca7caea4ef5689b9';
    }


    async getUser(user){
        const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}
