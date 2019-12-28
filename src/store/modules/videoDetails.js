
const state = {
    video: [
        {
            id: 1,
            videoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
            imageSrc: 'img/1.jpg',
            price: 20,
            videoLink: 'https://www.youtube.com/embed/TcMBFSGVi1c?control=0',
            days: 1,
            subtotal: 0,
            //imgSrc: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?controlauto=compress&cs=tinysrgb&dpr=1&w=500',
            title: 'Marvel End Game'
        },
        {
            id: 2,
            videoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
            imageSrc: 'img/2.jpg',
            price: 15,
            videoLink: 'https://www.youtube.com/embed/BV-WEb2oxLk?control=0',
            days: 1,
            subtotal: 0,
            //imgSrc: 'https://encrypted-tbn0.gstatic.com/images?controlq=tbn:ANd9GcTZivUOkBQXa2aH_IhluyilMOEi-AmlDrGJ9vWZCWRtj9wHUJZq',
            title: 'Men In Black'
        },
        {
            id: 3,
            videoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
            imageSrc: 'img/3.jpg',
            price: 18,
            videoLink: 'https://www.youtube.com/embed/lD-NcoXJbsU?control=0',
            days: 1,
            subtotal: 0,
            //imgSrc: 'https://encrypted-tbn0.gstatic.com/images?controlq=tbn:ANd9GcQaHgHpIvtZ6vIWDY0yVOo4snBb1YSpUPoDrlbbsdPndJ41JfGt',
            title: 'Alladin'
        },
        {
            id: 4,
            videoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
            imageSrc: 'img/4.png',
            price: 20,
            videoLink: 'https://www.youtube.com/embed/hIMJ0_S-x40?control=0',
            days: 1,
            subtotal: 0,
            //imgSrc: 'https://encrypted-tbn0.gstatic.com/images?controlq=tbn:ANd9GcS-giP-Cw0KoasckMXAtnEZoyAuP3JjNhGEIFRgepsV7KZC5qKf',
            title: 'Point Blank'
        },
        {
            id: 5,
            videoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
            imageSrc: 'img/5.png',
            price: 20,
            videoLink: 'https://www.youtube.com/embed/1roy4o4tqQM?control=0',
            days: 1,
            subtotal: 0,
            //imgSrc: 'https://encrypted-tbn0.gstatic.com/images?controlq=tbn:ANd9GcS-giP-Cw0KoasckMXAtnEZoyAuP3JjNhGEIFRgepsV7KZC5qKf',
            title: 'Detective Pikachu'
        },
        {
            id: 6,
            videoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
            imageSrc: 'img/6.png',
            price: 20,
            videoLink: 'https://www.youtube.com/embed/ZsBO4b3tyZg?control=0',
            days: 1,
            subtotal: 0,
            //imgSrc: 'https://encrypted-tbn0.gstatic.com/images?controlq=tbn:ANd9GcS-giP-Cw0KoasckMXAtnEZoyAuP3JjNhGEIFRgepsV7KZC5qKf',
            title: 'Hell Boy 2'
        },
        {
            id: 7,
            videoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
            imageSrc: 'img/7.jpg',
            price: 20,
            videoLink: 'https://www.youtube.com/embed/6prr2MIHE0Q?controlcontrol=0',
            days: 1,
            subtotal: 0,
            //imgSrc: 'https://encrypted-tbn0.gstatic.com/images?controlq=tbn:ANd9GcS-giP-Cw0KoasckMXAtnEZoyAuP3JjNhGEIFRgepsV7KZC5qKf',
            title: 'Godzilla'
        },
        {
            id: 8,
            videoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
            imageSrc: 'img/8.png',
            price: 20,
            videoLink: 'https://www.youtube.com/embed/v1ee6Y-K6KY?control=0',
            days: 1,
            subtotal: 0,
            //imgSrc: 'https://encrypted-tbn0.gstatic.com/images?controlq=tbn:ANd9GcS-giP-Cw0KoasckMXAtnEZoyAuP3JjNhGEIFRgepsV7KZC5qKf',
            title: 'Long Shot'
        },
        {
            id: 9,
            videoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
            imageSrc: 'img/9.png',
            price: 20,
            videoLink: 'https://www.youtube.com/embed/isOGD_7hNIY?control=0',
            days: 1,
            subtotal: 0,
            //imgSrc: 'https://encrypted-tbn0.gstatic.com/images?controlq=tbn:ANd9GcS-giP-Cw0KoasckMXAtnEZoyAuP3JjNhGEIFRgepsV7KZC5qKf',
            title: 'Parasite'
        },
        {
            id: 10,
            videoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
            imageSrc: 'img/10.png',
            price: 18,
            videoLink: 'https://www.youtube.com/embed/lD-NcoXJbsU?control=0',
            days: 1,
            subtotal: 0,
            //imgSrc: 'https://encrypted-tbn0.gstatic.com/images?controlq=tbn:ANd9GcQaHgHpIvtZ6vIWDY0yVOo4snBb1YSpUPoDrlbbsdPndJ41JfGt',
            title: 'Alladin'
        },
        // {
        //     id:11,
        //     videoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        //     imageSrc:'img/11.png',
        //     //imgSrc: 'https://encrypted-tbn0.gstatic.com/images?controlq=tbn:ANd9GcS-giP-Cw0KoasckMXAtnEZoyAuP3JjNhGEIFRgepsV7KZC5qKf',
        //     title:'Money Heist'
        // },
    ]
};

const getters = {
    videoDetails: state => state.video
}

const mutations = {
    get_Video: (state, payload) => state.video.push(payload),

}

const actions = {
    get_Video: ({ commit }, payload) => commit('get_video', payload),

}

export default {
    state,
    getters,
    mutations,
    actions
}