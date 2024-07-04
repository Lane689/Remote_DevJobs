import {
    state
} from "../common.js";

const storedJobItems = localStorage.getItem('bookmarkJobItem');
if(storedJobItems) {
    state.bookmarkJobItems = JSON.parse(storedJobItems);
}