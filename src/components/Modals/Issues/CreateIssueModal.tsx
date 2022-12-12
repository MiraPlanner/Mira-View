import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/esm/Form'
import Modal from 'react-bootstrap/esm/Modal'
import { createIssue, IssueProps } from '../../../shared/utils/calls'
import { IssueStatus, IssueType } from '../../../shared/constants/issues'
import { BacklogContext } from '../../../shared/context/BacklogProvider'

type Props = {
  show: boolean
  hide: () => void
  defaultValue: string | undefined
}

const CreateIssueModal = ({ show, hide, defaultValue }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(false)
  const { sprints, setSprints, backlog, setBacklog } = useContext(BacklogContext)

  const issue = {
    sprintId: undefined,
    title: '',
    description: undefined,
    duration: undefined,
    issueType: IssueType.STORY,
    issueStatus: IssueStatus.TODO,
  }
  const [issueForm, setIssueForm] = useState<IssueProps>(issue)
  const handleClose = () => {
    setIssueForm(issue)
    hide()
  }

  const submitIssue = () => {
    const handleIssue: IssueProps = {
      sprintId: issueForm.sprintId,
      title: issueForm.title,
      description: issueForm.description,
      duration: issueForm.duration,
      issueType: issueForm.issueType,
      issueStatus: issueForm.issueStatus,
    }

    createIssue(handleIssue).then((response) => {
      if (response.error) {
        setError(true)
      } else {
        setError(false)
        const createdIssue = response.response
        updateBacklog(createdIssue)
      }
    })
  }

  const updateBacklog = (createdIssue: IssueProps) => {
    if (createdIssue.sprintId != null) {
      // Update Sprints
      const index = sprints.findIndex((s) => s.id == createdIssue.sprintId)
      if (index === -1) return
      const updatedSprint = sprints[index]
      updatedSprint.issues.push(createdIssue)
      const sprintsCopy = [...sprints]
      sprintsCopy[index] = updatedSprint
      setSprints(sprintsCopy)
    } else {
      // Update Backlog
      setBacklog([...backlog, createdIssue])
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name == 'issueType')
      setIssueForm({ ...issueForm, [event.target.name]: parseInt(event.target.value) })
    else setIssueForm({ ...issueForm, [event.target.name]: event.target.value })
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
            <Form.Label>Sprint </Form.Label>
            <Form.Control as='select' name='sprintId' onChange={handleChange} value={defaultValue}>
              <option value={undefined}>Backlog</option>

              {sprints?.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Issue Type</Form.Label>
            <Form.Control as='select' name='issueType' onChange={handleChange}>
              <option value={IssueType.STORY}>User story</option>
              <option value={IssueType.TASK}>Task</option>
              <option value={IssueType.Subtask}>Subtask</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Summary</Form.Label>
            <Form.Control
              type='text'
              name='title'
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
              defaultValue={issueForm.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type='number'
              name='duration'
              defaultValue={issueForm.duration}
              onChange={handleChange}
              min={0}
              max={10000000}
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
