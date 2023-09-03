import assets from "../assets/imges";

interface SidebarItem {
    id: string;
    link: string;
    img: string;
}

interface suggtion {
    id: Number;
    name: string;
}

export const sidebar:SidebarItem[] = [
    {
        id:"home",
        link : "Home",
        img:assets.home
    },
    {
        id:"explore",
        link : "Explore",
        img:assets.Explores
    },
    {
        id:"shorts",
        link : "Short",
        img:assets.Shorts
    },
    {
        id:"subscriptions",
        link : "Subscriptions",
        img:assets.Subscriptions
    },
    {
        id:"library",
        link : "Library",
        img:assets.Library
    },
    {
        id:"history",
        link : "History",
        img:assets.history
    },
    {
        id:"videos",
        link : "Your videos",
        img:assets.Your_vidois
    },
    {
        id:"watch_later",
        link : "Watch later",
        img:assets.Watch_later
    },
    {
        id:"pop",
        link : "Pop",
        img:assets.Pop
    },
  ]

  export const suggtion:suggtion[] = [
      {
          id:0,
          name : "All",
      },
    {
        id:1,
        name : "Home",
    },
    {
        id:2,
        name : "UX",
    },
    {
        id:3,
        name : "Case Study",
    },

     {
        id:4,
        name : "Music",
    },
    {
        id:5,
        name : "Bnagla Lofi",
    },
    {
        id:6,
        name : "Tour",
    },

    {
        id:7,
        name : "Saintmartin",
    },
    {
        id:8,
        name : "Saintmartin",
    },
    {
        id:9,
        name : "Saintmartin",
    },
    {
        id:10,
        name : "Saintmartin",
    },
    {
        id:11,
        name : "Saintmartin",
    },
    {
        id:12,
        name : "Saintmartin",
    },
  ]

 export const addvideo =  [
    {
        img:assets.Your_vidois,
        titel:"Upload video",
    },
    {
        img:assets.live,
        titel:"Go live",
    }
 ] 

 export const userinfo =  [
    {
        img:assets.Your_vidois,
        titel:"Upload video",
    },
    {
        img:assets.live,
        titel:"Go live",
    }
 ] 