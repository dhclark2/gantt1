class Task < ApplicationRecord
  belongs_to :parent_task, foreign_key:
  :parent_task_id, class_name: "Task"
end
