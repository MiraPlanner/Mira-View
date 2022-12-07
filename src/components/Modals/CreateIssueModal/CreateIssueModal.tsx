import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/esm/Form'
import Modal from 'react-bootstrap/esm/Modal'
import { createIssue, IssueProps } from '../../../shared/utils/calls'
import { IssueStatus, IssueType } from '../../../shared/constants/issues'

export interface IModalProps {
  show: boolean
  setShow: (arg: boolean) => void
}

const CreateIssueModal: React.FC<IModalProps> = ({ show, setShow }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(false)
  const handleClose = () => setShow(false)
  const [issueForm, setIssueForm] = useState({
    sprintId: '',
    title: '',
    description: '',
    duration: 0,
    type: IssueType.STORY,
  })

  const submitIssue = () => {
    const handleIssue: IssueProps = {
      sprintId: issueForm.sprintId,
      title: issueForm.title,
      description: issueForm.description,
      duration: issueForm.duration,
      type: issueForm.type,
      status: IssueStatus.TODO,
    }

    createIssue(handleIssue)
      .then((response) => {
        if (response.error) {
          setError(true)
        } else {
          const createdIssue = response.response
          console.log(createdIssue) //ToDO Remove console log
          setError(false)
          // setPatient(resPatient)
          // updateTable(true)
        }
      })
      .catch((err) => {
        console.error('Error occurred while fetching patients', err)
        setError(true)
      })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIssueForm({ ...issueForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    submitIssue()
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Issue</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Sprint</Form.Label>
            <Form.Control
              type='text'
              name='sprintId'
              placeholder='Sprint Id'
              defaultValue={issueForm.sprintId}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Summary</Form.Label>
            <Form.Control
              type='text'
              name='title'
              placeholder='Title'
              defaultValue={issueForm.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={5}
              name='description'
              placeholder='Description'
              defaultValue={issueForm.description}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Cancel
        </Button>
        <Button variant='primary' onClick={handleSubmit}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateIssueModal
