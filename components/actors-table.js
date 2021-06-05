import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState, } from 'react';
import SceneItem from './scene-item';
import { getScenes, deleteScene } from '../utils/scenes';
import SceneInfoModal from './scene-info-modal';
import ConfirmationModal from './confirmation-modal';
import SaveSceneModal from './save-scene-modal';

const HEADER = [ 'Movie', 'Actors', 'Studio', 'Tags', ];

export default function ActorsTable() {
    useEffect(function() {
        getScenesFn();
    }, []);

    const [scenes, setScenes] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
    const [selectedSceneIndex, setSelectedSceneIndex] = useState(-1);

    async function getScenesFn() {
        let scenes = await getScenes();
        setScenes(scenes);
    }

    function getScene() {
        return selectedSceneIndex ? scenes[selectedSceneIndex] : null;
    }
  
    function showInfoModalFn(event) {
      event.stopPropagation();
      
      let data = event.target.parentElement.dataset;
      setSelectedSceneIndex(data.index);

      setShowInfoModal(true);
    }
    
    function hideInfoModalFn() {
        setShowInfoModal(false);
    }
  
    function showEditModalFn(event) {
        event.stopPropagation();

        let data = event.target.dataset;
        setSelectedSceneIndex(data.index);

        setShowEditModal(true);
    }
    
    function hideEditModalFn() {
        setShowEditModal(false);
    }

    function hideConfirmDeleteModalFn() {
        setShowConfirmDeleteModal(false);
    }
  
    function confirmDelete(event) {
        event.stopPropagation();

        let data = event.target.dataset;
        setSelectedSceneIndex(data.index);

        setShowConfirmDeleteModal(true);
    }

    async function deleteSceneFn() {
        if (!getScene()) {
            return;
        }

        await deleteScene(getScene());

        scenes.splice(selectedSceneIndex, 1);
        setScenes(scenes);

        setShowConfirmDeleteModal(false);
    }

    const menu = <Popover id="menu">
      <Popover.Content>
        Cambiar las columnas de orden
      </Popover.Content>
    </Popover>
    
    return <div>
        <Button variant="primary" onClick={showEditModalFn}>Crear escena</Button>{' '}

        <Table hover responsive>
            <thead>
                <tr>
                    {HEADER.map(function(each, i) {
                        return <th className="border-top-0 border-bottom" key={i}>{each}</th>
                    })}
                    <th className="border-top-0 border-bottom">
                        <OverlayTrigger trigger="click" placement="bottom" overlay={menu}>
                        <Button variant="link">...</Button>
                        </OverlayTrigger>
                    </th>
                </tr>
            </thead>
            <tbody>
                {scenes.map(function(obj, i) {
                    return <SceneItem index={i} key={i} scene={obj} onClickFn={showInfoModalFn} onEditFn={showEditModalFn} onDeleteFn={confirmDelete} />
                })}
            </tbody>
        </Table>

        <SaveSceneModal 
            scene={getScene()} 
            showModal={showEditModal} 
            onCloseFn={hideEditModalFn} 
            onDoneFn={getScenesFn} />

        <SceneInfoModal 
            scene={getScene()} 
            showModal={showInfoModal} 
            onCloseFn={hideInfoModalFn} />

        <ConfirmationModal 
            title="¿Eliminar esta escena?" 
            actionText="Eliminar" 
            showModal={showConfirmDeleteModal} 
            onConfirmFn={deleteSceneFn} 
            onCloseFn={hideConfirmDeleteModalFn} />
    </div>
}