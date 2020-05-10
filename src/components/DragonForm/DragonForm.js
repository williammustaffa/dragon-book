import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import Dragon from "store/models/Dragon";
import * as R from "ramda";
import { CustomDropdown } from "components/CustomDropdown";

function DragonForm(props = {}) {
  const { dragon = new Dragon(), onSubmit } = props;

  const { register, handleSubmit, errors, setValue, triggerValidation, getValues } = useForm({
    defaultValues: {
      id: dragon.id || "new",
      name: dragon.title || "",
      imageUrl: dragon.imageUrl || "",
      type: dragon.type || "",
      history: dragon.history || "",
    }
  });

  const dispatch = useDispatch();

  // Component did mount
  useEffect(() => {
    register({ name: "id" }, { required: false });
    register({ name: "name" }, { required: true });
    register({ name: "imageUrl" }, { required: true });
    register({ name: "type" }, { required: true });
    register({ name: "history" }, { required: true });
  }, [register]);

  function getError(fieldName) {
    return !!errors[fieldName];
  };

  async function updateFormField(e, { name, value }) {
    setValue(name, value);
    await triggerValidation({ name });
  }

  function onFormSubmit(data) {
    if (typeof onSubmit === "function") {
      onSubmit(data);
    }
  }

  // Create type options
  const types = R.values(Dragon.types).map(type => ({
    key: type.id,
    text: type.name,
    value: type.id,
    label: { color: type.color, empty: true, circular: true },
  }));

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <Form.Input
        fluid
        defaultValue={dragon.name}
        name="name"
        onChange={updateFormField}
        error={getError("name")}
        label="Dragon Name"
      />
      <Form.Input
        fluid
        name="imageUrl"
        defaultValue={dragon.imageUrl}
        onChange={updateFormField}
        error={getError("imageUrl")}
        label="Image URL"
      />
      <CustomDropdown
        fluid
        selection
        name="type"
        defaultValue={dragon.type}
        onChange={updateFormField}
        options={types}
        error={getError("type")}
        label="Dragon Type"
      />
      <Form.TextArea
        name="history"
        defaultValue={dragon.history}
        onChange={updateFormField}
        error={getError("history")}
        label="History"
      />
      <div className="form-footer">
        <Form.Button color="red">Save and publish</Form.Button>
      </div>
    </Form>
  )
}

DragonForm.propTypes = {
  dragon: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default DragonForm;