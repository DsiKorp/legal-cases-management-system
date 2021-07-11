const buildMessage = (entity, action) => {
    if (action === 'List') {
        return `${entity}s ${action}ed!!!`;
    }
    // se debe retornar la entidad con la accion en pasado
    return `${entity} ${action}d!!!`;
};

module.exports = buildMessage;