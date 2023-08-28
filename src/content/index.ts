import assets from "../assets/imges";

interface SidebarItem {
    id: string;
    link: string;
    img: string;
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