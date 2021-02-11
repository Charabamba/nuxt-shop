import axios from "axios";

// state
export const state = () => ({
  productsLoaded: []
});

// mutations
export const mutations = {
  setProducts(state, products) {
    state.productsLoaded = products;
  },
  addProduct(state, product) {
    // console.log(product);
    state.productsLoaded.push(product);
  },
  editProduct(state, productEdit) {
    const postIndex = state.productsLoaded.findIndex(
      post => post.id === productEdit.id
    );
    state.productsLoaded[postIndex] = productEdit;
  }
};

// actions
export const actions = {
  nuxtServerInit({ commit }, context) {
    return axios
      .get(
        "https://nuxt-shop-275d6-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      )
      .then(res => {
        const productsArray = [];
        for (let key in res.data) {
          productsArray.push({ ...res.data[key], id: key });
        }
        commit("setProducts", productsArray);
      })
      .catch(e => console.log(e));
  },
  addProduct({ commit }, product) {
    // console.log(product);
    return axios
      .post(
        "https://nuxt-shop-275d6-default-rtdb.europe-west1.firebasedatabase.app/products.json",
        product
      )
      .then(res => {
        // console.log(res);
        commit("addProduct", { ...product, id: res.data.name });
      })
      .catch(e => console.log(e));
  },
  editProduct({ commit, state }, product) {
    return axios
      .put(
        `https://nuxt-shop-275d6-default-rtdb.europe-west1.firebasedatabase.app/products/${product.id}.json`,
        product
      )
      .then(res => {
        commit("editProduct", product);
      })
      .catch(e => {
        console.log(e);
      });
  }
};

// getters
export const getters = {
  getProductsLoaded(state) {
    return state.productsLoaded;
  }
};