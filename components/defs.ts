export enum Page {
    Home,
    Search,
    Add,
    Notifications,
    Settings,
    Intro,
    Profile
}

export interface Settings {
    darkmode: boolean
    name: string
    handle: string
    homeloaded: boolean
}

export interface CardData {
    title: string,
    image: string | false,
    description: string,
    publisher: string,
    handle: string
}