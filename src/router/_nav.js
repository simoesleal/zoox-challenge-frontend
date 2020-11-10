/**
 * @description This is the navigation menu structure.
 */
export default {
  items: [
    {
      text: "Dashboard",
      prependIcon: "mdi-monitor-dashboard",
      routeName: "Dashboard",
      url: "/dashboard",
    },
    {
      text: "Geográfico",
      prependIcon: "mdi-earth",
      appendIcon: "mdi-chevron-down",
      "icon-alt": "mdi-chevron-up",
      model: false,
      children: [
        {
          prependIcon: "mdi-bank",
          text: "Estados",
          routeName: "StateList",
          url: "/states",
        },
        {
          prependIcon: "mdi-city-variant",
          text: "Cidade",
          routeName: "CityList",
          url: "/cities",
        },
      ],
    },
  ],
};
