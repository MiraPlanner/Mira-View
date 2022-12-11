import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/esm/Form'
import Modal from 'react-bootstrap/esm/Modal'
import { createIssue, getSprints, IssueProps, SprintProps } from '../../../shared/utils/calls'
import { IssueStatus, IssueType } from '../../../shared/constants/issues'

export interface IModalProps {
  show: boolean
  hide: () => void
}

const IssueCreateModal: React.FC<IModalProps> = ({ show, hide }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(false)
  const [sprints, setSprints] = useState<SprintProps[]>()
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

  useEffect(() => {
    fetchSprints()
  }, [])

  const fetchSprints = () => {
    getSprints().then((response) => {
      if (response.error) {
        setError(true)
      } else {
        setError(false)
        const fetchedSprints = response.response
        const sortedSprints = fetchedSprints.sort((a, b) => a.name.localeCompare(b.name))
        setSprints(sortedSprints)
      }
    })
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

    createIssue(handleIssue)
      .then((response) => {
        if (response.error) {
          setError(true)
        } else {
          const createdIssue = response.response
          setError(false)
          // updateTable(true)
        }
      })
      .catch((err) => {
        console.error('Error occurred while creating issue', err)
        setError(true)
      })
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
            <Form.Control as='select' name='sprintId' placeholder='Sprint' onChange={handleChange}>
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
              placeholder='Name'
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

          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type='number'
              name='duration'
              placeholder='Duration'
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

export default IssueCreateModal
