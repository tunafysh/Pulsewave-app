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
}