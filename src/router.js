import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from "./components/categories/Category";
import CategoryLots from './components/categories/CategoryLots';
import Lots from './components/lots/Lot';
import LotInfo from './components/lots/LotInfo';
import Layout from "./layout/Layout";
import Auction from './components/auctions/AuctionsLots';
import AuctionsLots from "./components/auctions/AuctionsLots";
import AuctionResult from "./components/auctions/AuctionResult";
import Users from './components/users/User';
import HistoryOfPrices from "./components/lots/HistoryofPrices";
import UsersHistoryOfPrices from "./components/users/UsersHistoryOfPrices";
import UsersListofCreatedLots from "./components/users/UsersListofCreatedLots";
import UsersListofWinning from "./components/users/UsersListofWinning";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index  element={<CategoryLots />} />
                <Route path="/categories" component={<Category />} />
                <Route path="/lots" element={<Lots />} />
                <Route path="/lot/:id" component={<LotInfo />} />
                <Route path="/auctions" component={<Auction />} />
                <Route path="/auctions" component={<AuctionsLots />} />
                <Route path="/auctions" component={AuctionResult} />
                <Route path="/users" component={<Users />} />
                <Route path="/lots" component={<HistoryOfPrices />} />
                <Route path="/price.id" component={<UsersHistoryOfPrices />} />
                <Route path="/user.id" component={<UsersListofCreatedLots />} />
                <Route path="/user.id" component={<UsersListofWinning />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


