import React, { useState } from "react";
import { Form, message, Popover } from "antd";
import { Input } from "antd";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { addNote, clearNotes } from "../../Redux/Slices/notesSlice";

const { TextArea } = Input;

function AddNotePopup({ children }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
    form.resetFields();
  };

  const onFinish = (values) => {
    dispatch(addNote(values));
    message.success("Note Added Successfully!");
    setOpen(false);
    form.resetFields();
  };

  const onFinishFailed = () => {
    message.error("Note Field Cannot Be Empty!");
  };

  const contentData = () => (
    <div className="w-[250px] sm:w-[322px] px-[12px] py-[24px] sm:p-[24px]">
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          name="note"
          rules={[
            {
              whitespace: true,
              required: true,
              validator: (_, value) => {
                if (!value || value.trim() === "") {
                  return Promise.reject("Please enter note!");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <TextArea
            rows={2}
            variant="borderless"
            className="!resize-none mb-[4px] font-sfpro font-normal text-[16px]"
            placeholder="Write text for sticky note..."
          />
        </Form.Item>
        <Form.Item>
          <Button text="Add Sticky Note" htmlType="submit" />
          {/* <span onClick={() => dispatch(clearNotes())}>clear Notes</span> */}
        </Form.Item>
      </Form>
    </div>
  );
  return (
    <>
      <Popover
        content={contentData}
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
        arrow={false}
        placement="leftTop"
      >
        {children}
      </Popover>
    </>
  );
}

export default AddNotePopup;
