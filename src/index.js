import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux' //создали редакс провайдера
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from 'components/error-boundary'
import BookStoreService from 'services/book-store' //создали getBooks
import {BookStoreServiceProvider} from 'components/context' //создали контекст реактовский
import store from 'store' //редаксовский стор
import App from 'components/app'

const bookStoreService = new BookStoreService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookStoreServiceProvider value={bookStoreService}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </BookStoreServiceProvider>
        </ErrorBoundary>
    </Provider>

    , document.getElementById('root'))