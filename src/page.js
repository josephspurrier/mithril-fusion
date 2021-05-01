import m from 'mithril';
import { Router, Link } from './lib/mithril/router';

export const App = () => {
    return {
        view: () =>
            m('div', [
                m(Router, {
                    '/': () => m(MainLayout, m(HomePage)),
                    '/about': () => m(MainLayout, m(AboutPage)),
                    '/:404?': () => m(MainLayout, m(ErrorPage)),
                }),
            ])
    };
};

export const MainLayout = () => {
    return {
        view: ({ children }) =>
            m('div', {}, children),
    };
};

export const HomePage = () => {
    return {
        view: () =>
            m('div', {}, [
                m('div', [
                    m("h1", "Home Page"),
                    m("div",
                        m(Link, m('a[href=/about]', 'About')),
                    ),
                    'This is the home page.',
                ]),
            ]),
    };
};

export const AboutPage = () => {
    return {
        view: () =>
            m('div', {}, [
                m('div', [
                    m("h1", "About Page"),
                    m("div",
                        m(Link, m('a[href=/]', 'Home'))
                    ),
                    'This is the about page.',
                ]),
            ]),
    };
};

export const ErrorPage = () => {
    return {
        view: () =>
            m('div', {}, [
                m('div', [
                    m("h1", "Page Not Found"),
                    'The page does not exist.',
                    ' ',
                    m(Link, m('a[href=/]', 'Back')),
                ]),
            ]),
    };
};