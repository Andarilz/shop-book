import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux' //создали редакс провайдера
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from 'components/error-boundary'
import BookStore from 'services/book-store' //создали getBooks
import {BookStoreService} from 'components/context'
import store from 'store' //редаксовский стор
import App from 'components/app'

const bookStoreService = new BookStore()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookStoreService.Provider value={bookStoreService}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </BookStoreService.Provider>
        </ErrorBoundary>
    </Provider>

    , document.getElementById('root'))