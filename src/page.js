import m from 'mithril';
import { Router, Link } from './lib/mithril/router';

export const App = () => {
    return {
        view: () =>
            m('div', [
                m(Router, {
                    '/': () => m(MainLayout, m(HomePage)),
                    '/about': () => m(MainLayout, m(AboutPage)),
                    '/about2': () => m(MainLayout, m(AboutPage2)),
                    '/:404?': () => m('p', '404!'),
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
                    'Home page.',
                    m(Link, m('a[href=/about]', 'About')),
                    m(Link, m('a[href=/about2]', 'About2')),
                ]),
            ]),
    };
};

export const AboutPage = () => {
    return {
        view: () =>
            m('div', {}, [
                m('div', [
                    'About page.',
                    m(Link, m('a[href=/]', 'Home')),
                    m(Link, m('a[href=/about2]', 'About2')),
                ]),
            ]),
    };
};

export const AboutPage2 = () => {
    return {
        view: () =>
            m('div', {}, [
                m('div', [
                    'About page 2.',
                    m(Link, m('a[href=/]', 'Home')),
                    m(Link, m('a[href=/about]', 'About')),
                ]),
            ]),
    };
};

export const ErrorPage = () => {
    return {
        view: () =>
            m('div', {}, [
                m('div', [
                    'Error page.',
                    m(Link, m('a[href=/]', 'Home')),
                ]),
            ]),
    };
};