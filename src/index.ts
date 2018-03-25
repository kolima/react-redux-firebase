import { createFirebaseInstance } from './createFirebaseInstance'
import firebaseConnect, { createFirebaseConnect } from './firebaseConnect'
import firestoreConnect, { createFirestoreConnect } from './firestoreConnect'
import withFirebase, { createWithFirebase } from './withFirebase'
import withFirestore, { createWithFirestore } from './withFirestore'
import enhancer, { getFirebase } from './enhancer'
import reducer from './reducer'
import constants, { actionTypes } from './constants'
import { authIsReady } from './utils/auth'
import * as helpers from './helpers'

export default {
  firebase: firebaseConnect,
  createFirebaseInstance,
  firebaseConnect,
  createFirebaseConnect,
  firestoreConnect,
  createFirestoreConnect,
  withFirebase,
  createWithFirebase,
  withFirestore,
  createWithFirestore,
  reducer,
  firebaseReducer: reducer,
  firebaseStateReducer: reducer,
  reduxReactFirebase: enhancer,
  reactReduxFirebase: enhancer,
  reduxFirebase: enhancer,
  constants,
  actionTypes,
  getFirebase,
  authIsReady,
  helpers,
  ...helpers
}

export as namespace ReactReduxFirebase;

// import * as firebase from 'firebase/app.d'

export const actionTypes: {
    AUTHENTICATION_INIT_FINISHED: string;
    AUTHENTICATION_INIT_STARTED: string;
    AUTH_EMPTY_CHANGE: string;
    AUTH_LINK_ERROR: string;
    AUTH_LINK_START: string;
    AUTH_LINK_SUCCESS: string;
    AUTH_RELOAD_ERROR: string;
    AUTH_RELOAD_START: string;
    AUTH_RELOAD_SUCCESS: string;
    AUTH_UPDATE_ERROR: string;
    AUTH_UPDATE_START: string;
    AUTH_UPDATE_SUCCESS: string;
    CLEAR_ERRORS: string;
    EMAIL_UPDATE_ERROR: string;
    EMAIL_UPDATE_START: string;
    EMAIL_UPDATE_SUCCESS: string;
    ERROR: string;
    FILE_DELETE_COMPLETE: string;
    FILE_DELETE_ERROR: string;
    FILE_DELETE_START: string;
    FILE_UPLOAD_COMPLETE: string;
    FILE_UPLOAD_ERROR: string;
    FILE_UPLOAD_PROGRESS: string;
    FILE_UPLOAD_START: string;
    LOGIN: string;
    LOGIN_ERROR: string;
    LOGOUT: string;
    MERGE: string;
    NO_VALUE: string;
    PROFILE_UPDATE_ERROR: string;
    PROFILE_UPDATE_START: string;
    PROFILE_UPDATE_SUCCESS: string;
    REMOVE: string;
    SESSION_END: string;
    SESSION_START: string;
    SET: string;
    SET_LISTENER: string;
    SET_PROFILE: string;
    START: string;
    UNAUTHORIZED_ERROR: string;
    UNSET_LISTENER: string;
};

export const constants: {
    actionTypes: {
        AUTHENTICATION_INIT_FINISHED: string;
        AUTHENTICATION_INIT_STARTED: string;
        AUTH_EMPTY_CHANGE: string;
        AUTH_LINK_ERROR: string;
        AUTH_LINK_START: string;
        AUTH_LINK_SUCCESS: string;
        AUTH_RELOAD_ERROR: string;
        AUTH_RELOAD_START: string;
        AUTH_RELOAD_SUCCESS: string;
        AUTH_UPDATE_ERROR: string;
        AUTH_UPDATE_START: string;
        AUTH_UPDATE_SUCCESS: string;
        CLEAR_ERRORS: string;
        EMAIL_UPDATE_ERROR: string;
        EMAIL_UPDATE_START: string;
        EMAIL_UPDATE_SUCCESS: string;
        ERROR: string;
        FILE_DELETE_COMPLETE: string;
        FILE_DELETE_ERROR: string;
        FILE_DELETE_START: string;
        FILE_UPLOAD_COMPLETE: string;
        FILE_UPLOAD_ERROR: string;
        FILE_UPLOAD_PROGRESS: string;
        FILE_UPLOAD_START: string;
        LOGIN: string;
        LOGIN_ERROR: string;
        LOGOUT: string;
        MERGE: string;
        NO_VALUE: string;
        PROFILE_UPDATE_ERROR: string;
        PROFILE_UPDATE_START: string;
        PROFILE_UPDATE_SUCCESS: string;
        REMOVE: string;
        SESSION_END: string;
        SESSION_START: string;
        SET: string;
        SET_LISTENER: string;
        SET_PROFILE: string;
        START: string;
        UNAUTHORIZED_ERROR: string;
        UNSET_LISTENER: string;
    };
    defaultConfig: {
        attachAuthIsReady: boolean;
        autoPopulateProfile: boolean;
        dispatchOnUnsetListener: boolean;
        dispatchRemoveAction: boolean;
        enableEmptyAuthChanges: boolean;
        enableLogging: boolean;
        enableRedirectHandling: boolean;
        firebaseStateName: string;
        presence: any;
        preserveOnEmptyAuthChange: any;
        preserveOnLogout: any;
        resetBeforeLogin: boolean;
        sessions: string;
        setProfilePopulateResults: boolean;
        updateProfileOnLogin: boolean;
        userProfile: any;
    };
};

/**
 * Promise which resolves when auth state has loaded.
 */
export function authIsReady(store: object, ...args: any[]): any;

/**
 * Factory function for creating a firebaseConnect Higher Order Component
 */
export function createFirebaseConnect(...args: any[]): any;

export function createFirebaseInstance(firebase: any, configs: any, dispatch: any, ...args: any[]): any;

export function createFirestoreConnect(...args: any[]): any;

export function createWithFirebase(storeKey: any): any;

export function createWithFirestore(storeKey: any): any;

export function firebase(...args: any[]): any;

/**
 * React HOC that attaches/detaches Firebase Real Time Database listeners on mount/unmount
 */
export function firebaseConnect(...args: any[]): any;

/**
 * Reducer for Firebase state
 */
export function firebaseReducer(...args: any[]): any;

/**
 * Reducer for Firebase state
 */
export function firebaseStateReducer(...args: any[]): any;

/**
 * React HOC that attaches/detaches Cloud Firestore listeners on mount/unmount
 */
export function firestoreConnect(...args: any[]): any;

/**
 * Reducer for Firestore state
 */
export function firestoreReducer(...args: any[]): any;

export function fixPath(path: string): string;

/**
 * Get Firebase instance
 */
export function getFirebase(): any;

export function getVal(firebase: object, path: string, notSetValue: any): any;

export function isEmpty(...args: any[]): boolean;

export function isLoaded(...args: any[]): boolean;

export function populate(state: object, path: string, populates: any, notSetValue: any): any;

export function reactReduxFirebase(instance: object, otherConfig: any): any;

export function reduxFirebase(instance: any, otherConfig: any): any;

export function reduxReactFirebase(instance: object, otherConfig: any): any;

/**
 * React Higher Order Component that passes firebase as a prop (comes from context.store.firebase)
 */
export function withFirebase(...args: any[]): any;
/**
 * React Higher Order Component that passes firestore as a prop (comes from context.store.firestore)
 */
export function withFirestore(...args: any[]): any;

export namespace authIsReady {
    const prototype: {
    };

}

export namespace createFirebaseConnect {
    const prototype: {
    };

}

export namespace createFirebaseInstance {
    const prototype: {
    };

}

export namespace createFirestoreConnect {
    const prototype: {
    };

}

export namespace createWithFirebase {
    const prototype: {
    };

}

export namespace createWithFirestore {
    const prototype: {
    };

}

export namespace firebase {
    const prototype: {
    };

}

export namespace firebaseConnect {
    const prototype: {
    };

}

export namespace firebaseReducer {
    const prototype: {
    };

}

export namespace firebaseStateReducer {
    const prototype: {
    };

}

export namespace firestoreConnect {
    const prototype: {
    };

}

export namespace firestoreReducer {
    const prototype: {
    };

}

export namespace fixPath {
    const prototype: {
    };

}

export namespace getFirebase {
    const prototype: {
    };

}

export namespace getVal {
    const prototype: {
    };

}

export namespace helpers {
    function fixPath(path: any): any;

    function getVal(firebase: any, path: any, notSetValue: any): any;

    function isEmpty(...args: any[]): any;

    function isLoaded(...args: any[]): any;

    function populate(state: any, path: any, populates: any, notSetValue: any): any;

    namespace fixPath {
        const prototype: {
        };

    }

    namespace getVal {
        const prototype: {
        };

    }

    namespace isEmpty {
        const prototype: {
        };

    }

    namespace isLoaded {
        const prototype: {
        };

    }

    namespace populate {
        const prototype: {
        };

    }

}

export namespace isEmpty {
    const prototype: {
    };

}

export namespace isLoaded {
    const prototype: {
    };

}

export namespace populate {
    const prototype: {
    };

}

export namespace reactReduxFirebase {
    const prototype: {
    };

}

export namespace reduxFirebase {
    const prototype: {
    };

}

export namespace reduxReactFirebase {
    const prototype: {
    };

}

export namespace withFirebase {
    const prototype: {
    };

}

export namespace withFirestore {
    const prototype: {
    };

}
