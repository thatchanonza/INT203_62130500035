    const app = {
        data() {
            return {
                msg: 'Hello, Vue3',
                myPhotoPhofile: './images/myPhoto.jpg',
                myBackground: './images/kobkieaw.jpg',
                fullname: 'Tanawat Srijarattanon',
                firstname: 'Tanawat',
                lastname: 'Srijarattanon',
                myJob: 'Data Analysis',
                myFollower: '200k',
                myArticle: '20',
                myRating: '9.9'

            }
        }

    }
    Vue.createApp(app).mount('#app')