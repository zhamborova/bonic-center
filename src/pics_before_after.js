import smooth_after from './assets/pics/smooth_after.jpeg';
import smooth_before from './assets/pics/smooth_before.jpg';

const pics = {
    rejuvination: {
        fotona4D_rejuvination: {
            cover: "fotona4D_rejuvination",
            pics: [{before:"4d_omolozhenie_before", after:"4d_omolozhenie_after"}],

        },
        ft_laser_frac_rejuvination: {
            cover: "ft_laser_frac_rejuvination",
            pics: [{before:"ft_shlifovka_before", after:"ft_shlifovka_after"}]
        },

        smooth_rejuvination: {
            url: "smooth_rejuvination",
            pics: [{before:smooth_before, after:smooth_after}]
        },
        laser_rejuvination: {
            url: "laser_rejuvination",
            title: "Лазерное омоложение FRAC3 T3",
            icon: "fract3t3omolozhenie.svg",
        },

        laser_piling: {
            url: "laser_piling",
            title: "Лазерный пилинг",
            icon: "piling.svg",
        },
        laser_giarunoplastic: {
            url: "laser_giarunoplastic",
            title: "Лазерная гиалуронопластика",
            icon: "giuluronaplastika.svg",
        }},
    problematic_skin:{
        acne_removal: {
            url: "acne_removal",
            pics: [{before:"acne_before", after:"acne_after"}]
        },
        pigmentation_removal: {
            url: "pigmentation_removal",
            pics: [{before:"pigmintation_before", after:"pigminatation_after"}]
        },

        growths_removal: {
            url: "growths_removal",
            pics: [{before:"novoobrazovaniya_before", after:"novoobrazovaniya_after"}]

        },
        vessel_removal: {
            url: "vessel_removal",
            pics: [{before:"sosudy_before", after:"sosudy_after"}]

        },
        ft_scar_removal: {
            url: "ft_scar_removal",
            title: "FT лазерная шлифовка рубцовой ткани на лазером аппарате Fotona",
            icon: "rubcovaya_tkan.svg",
        }},
    other:{
        laser_epilation: {
            url: "laser_epilation",
            pics: [{before:"epilation_before", after:"epilation_after"}]


        },

        laser_gynecology: {
            url: "laser_gynecology",
            title: "Лазерная гинекология",
            icon: "gynecology.svg",
        },

        countur_plastic: {
            url: "countur_plastic",
            title: "Контурная пластика",
            icon: "konturnaya plastica.svg",
        },
        botox_injection: {
            url: "botox_injection",
            title: "Иньекции Ботокс и Диспорт",
            icon: "botox.svg",
        },

        cleansing_care: {
            url: "cleansing_care",
            pics: [{before:"chistka_before", after:"chistka_after"}]

        },



    }

};

export default pics;