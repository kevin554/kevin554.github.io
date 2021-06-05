import { firestore } from "./firebase";

async function getScenes() {
    const snapshot = await firestore.collection("scenes").get();

    let scenes = [];
    snapshot.forEach(function(doc) {
        scenes.push({
            id: doc.id, 
            ...doc.data(), 
        });
    })
    
    return scenes;
};

async function createScene(scene) {
    const ref = await firestore.collection("scenes").add(scene);
    
    const newScene = {
        id: ref.id,
        ...scene,
    };
    
    return newScene;
}

async function updateScene(id, scene) {
    await firestore.collection("scenes").doc(id).update(scene);
}

async function deleteScene(scene) {
    await firestore.collection("scenes").doc(scene.id).delete();
}

export { getScenes, createScene, updateScene, deleteScene, };