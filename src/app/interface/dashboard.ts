export type apiResT = {
    status_code: number,
    success: boolean,
    data: {
        main_sliders: mainSliderT[]
        home_main_slider_timer: {
            id: number,
            key: string
            value: string
            default_value: string
            type: string
            description: string
        }
    }
}

export type mainSliderT = {
    id: number,
    src: string
    src_thumb: string
    main_title: string
    description: string
    link: null | string,
    link_title: null,
    buttons: null,
    src_second: string
    main_slider_buttons: [
        {
            id: number,
            title: string
            link: string
            main_slider_id: number
        },
        {
            id: number,
            title: string
            link: string
            main_slider_id: number
        },
        {
            id: number,
            title: string
            link: string
            main_slider_id: number
        }
    ]
}