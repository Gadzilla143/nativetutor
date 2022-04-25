interface IMarker {
    title: string;
    description: string;
    region: IRegion;
}

interface IRegion {
    latitude: number;
    longitude: number;
    latitudeDelta?: number,
    longitudeDelta?: number,
}

interface ILocation {
    title: string;
    region: IRegion;
}


export const MAP_MARKERS: IMarker[] = [
    {
        title: "Lopatina",
        description: "Belarus, Minsk, Lopatina office",
        region: {
            latitude: 53.953503855296326,
            longitude: 27.678004612052952,
        }
    },
    {
        title: "Oginskogo",
        description: "Belarus, Minsk, Oginskogo office",
        region: {
            latitude: 53.92927546582728,
            longitude: 27.67160289827422,
        }
    },
    {
        title: "Gomel",
        description: "Belarus, Gomel's office",
        region: {
            latitude: 52.47990040247856,
            longitude: 30.989361710329568,
        }
    },
    {
        title: "Mountain View, CA (Headquarters)",
        description: "800 West El Camino Real, Suite 180 Mountain View, CA 94040",
        region: {
            latitude: 37.386687569645325,
            longitude: -122.08415288484511,
        }
    },
    {
        title: "Troy, MI",
        description: "800 Kirts Boulevard, Suite 400 Troy, MI 48084",
        region: {
            latitude: 42.50166938855054,
            longitude: -83.18336663852548,
        }
    },
    {
        title: "King of Prussia, PA",
        description: "1012 W. 9th Avenue, Suite 250, King of Prussia, PA 19406",
        region: {
            latitude: 40.10542646316339,
            longitude: -75.4144379211405,
        }
    },
    {
        title: "Heidelberg, Germany",
        description: "Rudolf-Diesel-Straße 11, Heidelberg 69115",
        region: {
            latitude: 49.39780822677219,
            longitude: 8.6736592272256,
        }
    },
    {
        title: "Vilnius, Lithuania",
        description: "Gedimino ave. 44a, Vilnius 01400",
        region: {
            latitude: 54.68921301700393,
            longitude: 25.268051694877823,
        }
    },
    {
        title: "Wrocław, Poland",
        description: "50-088, Swobodna 1, Wrocław, Poland",
        region: {
            latitude: 51.09820112098343,
            longitude: 17.03213639212288,
        }
    },
    {
        title: "Tashkent, Uzbekistan",
        description: "Yunusabad District, massif Kiyot 68 A., Tashkent, Uzbekistan",
        region: {
            latitude: 41.32598694282178,
            longitude: 69.27760551326145,
        }
    },
]

export const MAP_LOCATIONS: ILocation[] = [
    {
        title: "EUROPE",
        region: {
            latitude: 51.09820112098343,
            longitude: 17.03213639212288,
            latitudeDelta: 30.2922,
            longitudeDelta: 30.2421,
        }
    },
    {
        title: "UZBEKISTAN",
        region: {
            latitude: 41.32598694282178,
            longitude: 69.27760551326145,
            latitudeDelta: 10.2922,
            longitudeDelta: 10.2421,
        }
    },
    {
        title: "USA",
        region: {
            latitude: 40.10542646316339,
            longitude: -75.4144379211405,
            latitudeDelta: 20.2922,
            longitudeDelta: 20.2421,
        }
    },
]