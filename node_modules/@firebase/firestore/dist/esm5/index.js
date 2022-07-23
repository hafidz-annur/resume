import e from "@firebase/app";

import { U as r, T as t, q as a, C as s, M as o, a as i, j as n, W as p, z as f, X as m, t as c, Z as u, n as l, s as b, r as g, o as d, Q as h, E as v } from "./prebuilt-306f43d8-45d6f0b9.js";

import { Component as w } from "@firebase/component";

import "tslib";

import "@firebase/util";

import "@firebase/logger";

import "@firebase/webchannel-wrapper";

var C = {
    Firestore: r,
    GeoPoint: s,
    Timestamp: o,
    Blob: i,
    Transaction: n,
    WriteBatch: p,
    DocumentReference: f,
    DocumentSnapshot: m,
    Query: c,
    QueryDocumentSnapshot: u,
    QuerySnapshot: l,
    CollectionReference: b,
    FieldPath: g,
    FieldValue: d,
    setLogLevel: h,
    CACHE_SIZE_UNLIMITED: v
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
function I(e) {
    !
    /**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
    function(e, r) {
        e.INTERNAL.registerComponent(new w("firestore", (function(e) {
            var t = e.getProvider("app").getImmediate();
            return r(t, e.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, C)));
    }(e, (function(e, s) {
        return new r(e, new t(e, s), new a);
    })), e.registerVersion("@firebase/firestore", "2.4.0");
}

I(e);

export { I as registerFirestore };
//# sourceMappingURL=index.js.map
