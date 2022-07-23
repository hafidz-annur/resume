/**
 * @license
 * Copyright 2020 Google LLC
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
import { FirebaseNamespace } from '@firebase/app-types';
import * as types from '@firebase/firestore-types';
import '../register-module';
/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
export declare function registerFirestore(instance: FirebaseNamespace): void;
declare module '@firebase/app-compat' {
    interface FirebaseNamespace {
        firestore: {
            (app?: FirebaseApp): types.FirebaseFirestore;
            Blob: typeof types.Blob;
            CollectionReference: typeof types.CollectionReference;
            DocumentReference: typeof types.DocumentReference;
            DocumentSnapshot: typeof types.DocumentSnapshot;
            FieldPath: typeof types.FieldPath;
            FieldValue: typeof types.FieldValue;
            Firestore: typeof types.FirebaseFirestore;
            GeoPoint: typeof types.GeoPoint;
            Query: typeof types.Query;
            QueryDocumentSnapshot: typeof types.QueryDocumentSnapshot;
            QuerySnapshot: typeof types.QuerySnapshot;
            Timestamp: typeof types.Timestamp;
            Transaction: typeof types.Transaction;
            WriteBatch: typeof types.WriteBatch;
            setLogLevel: typeof types.setLogLevel;
        };
    }
    interface FirebaseApp {
        firestore?(): types.FirebaseFirestore;
    }
}

import { FirebaseApp as FirebaseAppCompat } from "@firebase/app-compat";
import { DocumentReference, CollectionReference, DocumentData, DocumentSnapshot, QuerySnapshot, Firestore, FirestoreSettings, FirestoreError, Unsubscribe, SnapshotListenOptions, QueryConstraint, Query, SetOptions, UpdateData, FieldPath } from "@firebase/firestore";
declare module "@firebase/firestore" {
    function addDoc<T>(reference: types.CollectionReference<T>, data: T): Promise<DocumentReference<T>>;
    function collection(reference: types.CollectionReference<unknown>, path: string, ...pathSegments: string[]): CollectionReference<DocumentData>;
    function collection(reference: types.DocumentReference, path: string, ...pathSegments: string[]): CollectionReference<DocumentData>;
    function deleteDoc(reference: types.DocumentReference<unknown>): Promise<void>;
    function doc<T>(reference: types.CollectionReference<T>, path?: string, ...pathSegments: string[]): DocumentReference<T>;
    function doc(reference: types.DocumentReference<unknown>, path: string, ...pathSegments: string[]): DocumentReference<DocumentData>;
    function getDoc<T>(reference: types.DocumentReference<T>): Promise<DocumentSnapshot<T>>;
    function getDocFromCache<T>(reference: types.DocumentReference<T>): Promise<DocumentSnapshot<T>>;
    function getDocFromServer<T>(reference: types.DocumentReference<T>): Promise<DocumentSnapshot<T>>;
    function getDocs<T>(query: types.Query<T>): Promise<QuerySnapshot<T>>;
    function getDocsFromCache<T>(query: types.Query<T>): Promise<QuerySnapshot<T>>;
    function getDocsFromServer<T>(query: types.Query<T>): Promise<QuerySnapshot<T>>;
    function getFirestore(app?: FirebaseAppCompat): Firestore;
    function initializeFirestore(app: FirebaseAppCompat, settings: FirestoreSettings): Firestore;
    function onSnapshot<T>(reference: types.DocumentReference<T>, observer: {
        next?: (snapshot: DocumentSnapshot<T>) => void;
        error?: (error: FirestoreError) => void;
        complete?: () => void;
    }): Unsubscribe;
    function onSnapshot<T>(reference: types.DocumentReference<T>, options: SnapshotListenOptions, observer: {
        next?: (snapshot: DocumentSnapshot<T>) => void;
        error?: (error: FirestoreError) => void;
        complete?: () => void;
    }): Unsubscribe;
    function onSnapshot<T>(reference: types.DocumentReference<T>, onNext: (snapshot: DocumentSnapshot<T>) => void, onError?: (error: FirestoreError) => void, onCompletion?: () => void): Unsubscribe;
    function onSnapshot<T>(reference: types.DocumentReference<T>, options: SnapshotListenOptions, onNext: (snapshot: DocumentSnapshot<T>) => void, onError?: (error: FirestoreError) => void, onCompletion?: () => void): Unsubscribe;
    function onSnapshot<T>(query: types.Query<T>, observer: {
        next?: (snapshot: QuerySnapshot<T>) => void;
        error?: (error: FirestoreError) => void;
        complete?: () => void;
    }): Unsubscribe;
    function onSnapshot<T>(query: types.Query<T>, options: SnapshotListenOptions, observer: {
        next?: (snapshot: QuerySnapshot<T>) => void;
        error?: (error: FirestoreError) => void;
        complete?: () => void;
    }): Unsubscribe;
    function onSnapshot<T>(query: types.Query<T>, onNext: (snapshot: QuerySnapshot<T>) => void, onError?: (error: FirestoreError) => void, onCompletion?: () => void): Unsubscribe;
    function onSnapshot<T>(query: types.Query<T>, options: SnapshotListenOptions, onNext: (snapshot: QuerySnapshot<T>) => void, onError?: (error: FirestoreError) => void, onCompletion?: () => void): Unsubscribe;
    function query<T>(query: types.Query<T>, ...queryConstraints: QueryConstraint[]): Query<T>;
    function queryEqual<T>(left: types.Query<T>, right: types.Query<T>): boolean;
    function setDoc<T>(reference: types.DocumentReference<T>, data: T): Promise<void>;
    function setDoc<T>(reference: types.DocumentReference<T>, data: Partial<T>, options: SetOptions): Promise<void>;
    function updateDoc(reference: types.DocumentReference<unknown>, data: UpdateData): Promise<void>;
    function updateDoc(reference: types.DocumentReference<unknown>, field: string | FieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): Promise<void>;
}
