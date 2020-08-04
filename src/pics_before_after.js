import smooth_after from './assets/pics/smooth_after.jpeg';
import smooth_before from './assets/pics/smooth_before.jpg';
import d4_omolozhenie_before from './assets/pics/d4_omolozhenie_before.jpg';
import d4_omolozhenie_after from './assets/pics/d4_omolozhenie_after.jpeg';
import ft_shlifovka_before from './assets/pics/ft_shlifofka_before.jpg';
import ft_shlifovka_after from './assets/pics/ft_shlifofka_after.jpeg';
import epilation2_before from './assets/pics/epilation2_before.jpg';
import epilation2_after from './assets/pics/epilation2_after.jpeg';
import epilation_before from './assets/pics/epilation_before.jpg';
import epilation_after from './assets/pics/epilation_after.jpeg';
import acne_before from './assets/pics/acne_before.jpg';
import acne_after from './assets/pics/acne_after.jpeg';
import frac3t3_before from './assets/pics/frac3t3_before.jpg';
import frac3t3_after from './assets/pics/frac3t3_after.jpeg';
import giarulonaplastika_before from './assets/pics/giarulonaplastika_before.jpg';
import giarulonaplastika_after from './assets/pics/giarulonaplastika_after.jpeg';
import novoabrozovania_before from './assets/pics/novoabrozovania_before.jpg';
import novoabrozovania_after from './assets/pics/novoabrozovania_after.jpeg';
import novoabrozovaniya_before from './assets/pics/novoobrazovaniya_before.jpg';
import novoabrozovaniya_after from './assets/pics/novoobrazovaniya_after.jpeg';
import pigmintation_before from './assets/pics/pigmintation_before.jpg';
import pigmintation_after from './assets/pics/pigmintation_after.jpeg';
import piling_before from './assets/pics/piling_before.jpg';
import piling_after from './assets/pics/piling_after.jpeg';
import rubcovaya_tkan_before from './assets/pics/rubcovaya_tkan_before.jpg';
import rubcovaya_tkan_after from './assets/pics/rubcovaya_tkan_after.jpeg';
import sosudy_before from './assets/pics/sosudy_before.jpeg';
import sosudy_after from './assets/pics/sosudy_after.jpg';




const pics = {
    rejuvination: {
        fotona4D_rejuvination: {
            cover: "fotona4D_rejuvination",
            pics: [{before:"d4_omolozhenie_before", after:"d4_omolozhenie_after"}],

        },
        ft_laser_frac_rejuvination: {
            cover: "ft_laser_frac_rejuvination",
            pics: [{before:"ft_shlifovka_before", after:"ft_shlifovka_after"}]
        },

        smooth_rejuvination: {
            url: "smooth_rejuvination",
            pics: [{before:"smooth_before", after:"smooth_after"}]
        },
        laser_rejuvination: {
            url: "laser_rejuvination",
            pics: [{before: "frac3t3_before", after: "frac3t3_after"}]
        },

        laser_piling: {
            url: "laser_piling",
            pics: [{before: "piling_before", after: "piling_after"}]

        },
        laser_giarunoplastic: {
            url: "laser_giarunoplastic",
            pics: [{before:"giarulonaplastika_before", after: "giarulonaplastika_after"}]

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
            pics: [{before:"novoobrazovaniya_before", after:"novoobrazovaniya_after"},
                {before:"novoobrazovania_before", after:"novoobrazovania_after"}]

        },
        vessel_removal: {
            url: "vessel_removal",
            pics: [{before:"sosudy_before", after:"sosudy_after"}]

        },
        ft_scar_removal: {
            url: "ft_scar_removal",
            pics: [{before:"rubcovaya_tkan_before", after: "rubcovaya_tkan_after"}]

        }},
    other:{
        laser_epilation: {
            url: "laser_epilation",
            pics: [{before:"epilation_before", after: "epilation_after"},
                   {before:"epilation2_before", after: "epilation2_after"}  ]


        },

        laser_gynecology: {
            url: "laser_gynecology",

        },

        countur_plastic: {
            url: "countur_plastic",
            pics: [{before: "countur_plastic_before", after: "countur_plastic_after"}]

        },
        botox_injection: {
            url: "botox_injection",
            pics:[{before: "botox_before", after: "botox_after"}]
        },

        cleansing_care: {
            url: "cleansing_care",
            pics: [{before: "chistka_before", after: "chistka_after"}]

        },



    }

};

export default pics;
