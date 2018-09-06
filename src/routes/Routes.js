import SlideContainer from "../containers/SlideContainer"
import CounterContainer from "../containers/CounterContainer";
import GameContainer from "../containers/GameContainer";

export default [
    {
        path: "/",
        redirect: "/counter"
    },
    {
        path: "/counter",
        name: "counter",
        component: CounterContainer
    },
    {
        path: "/slide",
        redirect: "/slide/1"
    },
    {
        path: "/slide/:index",
        name: "slide",
        component: SlideContainer
    },
    {
        path: "/game",
        name: "game",
        component: GameContainer
    }
];
