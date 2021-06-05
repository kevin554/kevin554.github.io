import Button from 'react-bootstrap/Button';

export default function SceneItem({scene, index, onClickFn, onEditFn, onDeleteFn}) {
    function sceneClicked(event) {
        if (onClickFn) {
            onClickFn(event);
        }
    }

    function editClicked(event) {
        if (onEditFn) {
            onEditFn(event);
        }
    }

    function deleteClicked(event) {
        if (onEditFn) {
            onDeleteFn(event);
        }
    }

    return <>
        <tr data-index={index} onClick={sceneClicked}>
            <td className="border-top-0">{scene?.title}</td>
            <td className="border-top-0">{scene?.actors?.join(", ")}</td>
            <td className="border-top-0">{scene?.studio}</td>
            <td className="border-top-0">
                <Button data-index={index} variant="link" onClick={editClicked}>Editar</Button>
                <Button data-index={index} variant="link" onClick={deleteClicked}>Eliminar</Button>
            </td>
        </tr>
    </>
}