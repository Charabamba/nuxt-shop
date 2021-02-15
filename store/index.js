import axios from "axios";

// state
export const state = () => ({
  productsLoaded: [],
  token: null
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
  },
  setToken(state, token) {
    state.token = token;
  },
  destroyToken(state) {
    state.token = null;
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
  },
  authUser({ commit }, authData) {
    const key = "AIzaSyA8cf-1b9s9wXlWM5pcNLFFlJzh-dDozw4";
    return axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then(res => {
        commit("setToken", res.data.idToken);
      })
      .catch(e => {
        console.log(e);
      });
  },
  logoutUser({ commit }) {
    commit("destroyToken");
  }
};

// getters
export const getters = {
  getProductsLoaded(state) {
    return state.productsLoaded;
  },
  checkAuthUser(state) {
    return state.token != null;
  }
};
