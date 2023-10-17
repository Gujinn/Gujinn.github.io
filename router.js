const routes = {
    '/': 'Introduction/introduction.html',
    '/advanced': 'Advanced/Functionalities/functionalities.html',
    '/basics': 'Basics/basics.html',
    '/basics/binders': 'Basics/Binders/binders.html',
    '/basics/computed': 'Basics/Computed/computed.html',
    '/basics/life-cycle': 'Basics/Life cycle/lifecycle.html',
    '/basics/methods': 'Basics/Methods/methods.html',
    '/basics/watchers': 'Basics/Watchers/watchers.html',
    '/best-practices': 'Best practices/practices.html',
    '/components': 'Components/components.html',
    '/composition-api': 'Composition API/composition.html',
    '/deployment': 'Deployment/deployment.html',
    '/directives': 'Directives/directives.html',
    '/resources': 'Resources/resources.html',
    '/router': 'Router/router.html',
    '/store': 'Store/store.html',
    '/store/pinia': 'Store/Pinia/pinia.html',
    '/store/vuex': 'Store/Vuex/vuex.html',
    '/summary': 'Summary/summary.html',
    '/tests': 'Tests/tests.html',
    '/vite': 'Vite/vite.html'
};

function loadRoute(route) {
    const contentDiv = document.getElementById('content');
    fetch(route)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the page:', error);
        });
}

window.addEventListener('hashchange', () => {
    const route = routes[window.location.hash.slice(1)];
    if (route) {
        loadRoute(route);
    } else {
        contentDiv.innerHTML = '<h1>404: Page not found</h1>';
    }
});

const initialRoute = routes[window.location.hash.slice(1)] || 'Introduction/introduction.html';
loadRoute(initialRoute);
