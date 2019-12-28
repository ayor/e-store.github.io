export const dataMixins = {
    data() {
        return {
          user: {},
          videoTableIsVisible: false,
          videoArray: [],
          formats:[],
          usersRentedVideo: [],
          homeIsVisible: false,
          customerRentedVideosIsVisible: false,
          customerVideos:[],
          selectedVideoTitle:'',
          selectedFormat:'',
          quickLinks: [
            {
              clickEvent: this.Home,
              text: "Home"
            },
            {
              clickEvent: this.showMyRentedVideosTable,
              text: "My Rented Video List"
            },
            {
              clickEvent: this.showVideoTable,
              text: "See Videos"
            },
           
          ]
        };
      },
} 